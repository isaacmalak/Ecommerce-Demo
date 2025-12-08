import { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";


export function AnimatedPages({ children }: { children: ReactNode }) {
    const pathName = usePathname();
    return (
        <motion.div
            key={pathName}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
}