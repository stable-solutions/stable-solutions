import { motion } from 'framer-motion';
import { LogoTextHeader } from './LogoText';

const Logo = () => {
    return (
        <div className="text-3xl font-extrabold font-poppins">
            <motion.span
                className="bg-pale-blue text-transparent bg-clip-text font-poppins font-semibold text-dark-blue"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <LogoTextHeader />
            </motion.span>
        </div>
    );
};

export default Logo;
