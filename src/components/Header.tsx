import {useEffect, useState} from 'react';
import {useLanguage} from '@/contexts/LanguageContext';
import {useTheme} from 'next-themes';
import {Menu, Moon, Sun, X} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {AnimatePresence, motion} from 'framer-motion';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


const Header = () => {
    const { lang, setLang, t } = useLanguage();
    const { theme, setTheme } = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: t('nav.features'), href: '#hero' },
        { label: t('nav.solutions'), href: '#solution' },
        { label: t('nav.hardware'), href: '#hardware' },
        { label: t('nav.pricing'), href: '#pricing' },
        { label: t('nav.faq'), href: '#faq' },
    ];

    const scrollTo = (href: string) => {
        setMobileOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-background/80 backdrop-blur-xl shadow-md border-b border-border'
                    : 'bg-[hsl(var(--glass))]'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between h-20 px-4">

                {/* Logo */}
                <a
                    href="#"
                    className="flex items-center gap-2 font-bold text-4xl tracking-tight group"
                >
                    {/*<div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-white font-semibold transition-transform group-hover:scale-105">*/}
                    {/*    KP*/}
                    {/*</div>*/}
                    <span className="text-foreground">
            K-TECH <span className="text-primary">POS</span>
          </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navItems.map((item) => (
                        <button
                            key={item.href}
                            onClick={() => scrollTo(item.href)}
                            className="relative text-lg font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* Right controls */}
                <div className="hidden lg:flex items-center gap-4">

                    {/* Lang switcher (segmented style refined) */}
                    <div className="pt-1">
                        <Select value={lang} onValueChange={(value) =>
                            setLang(value as typeof lang)
                        }>
                            <SelectTrigger className="w-full">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="uz">UZ</SelectItem>
                                <SelectItem value="ru">РУ</SelectItem>
                                <SelectItem value="en">EN</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Theme */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="relative"
                    >
                        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>

                    {/* CTA */}
                    <Button
                        onClick={() => scrollTo('#demo')}
                        className="bg-primary text-lg hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all"
                    >
                        {t('nav.login')}
                    </Button>
                </div>

                {/* Mobile toggle */}
                <button
                    className="lg:hidden text-foreground transition-transform active:scale-90"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
                    >
                        <div className="p-4 flex flex-col gap-3">
                            {navItems.map((item) => (
                                <button
                                    key={item.href}
                                    onClick={() => scrollTo(item.href)}
                                    className="text-sm font-medium text-muted-foreground hover:text-foreground text-left py-2 transition-colors"
                                >
                                    {item.label}
                                </button>
                            ))}

                            <div className="pt-4 border-t border-border">
                                <Select value={lang} onValueChange={(value) =>
                                    setLang(value as typeof lang)
                                }>
                                    <SelectTrigger className="w-full">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="uz">UZ</SelectItem>
                                        <SelectItem value="ru">РУ</SelectItem>
                                        <SelectItem value="en">EN</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                >
                                    <Sun className="h-4 w-4 dark:hidden" />
                                    <Moon className="h-4 w-4 hidden dark:block" />
                                </Button>
                            </div>

                            <Button
                                onClick={() => scrollTo('#demo')}
                                className="w-full bg-primary text-primary-foreground mt-2 shadow-md"
                            >
                                {t('nav.demo')}
                            </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;