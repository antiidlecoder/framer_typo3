import '../styles/globals.css'
import Layout from "../components/layout/Layout";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import {useEffect, useState} from "react";
import * as React from 'react'
import useMouse from '@react-hook/mouse-position'
import Header from "../components/layout/Header";


const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 0 },
}

function MyApp({ Component, pageProps, router }) {

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);


  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, [])

  return <>


    <Header />
    <Layout>

    <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear' }}
          key={router.route}
      >
        <Component {...pageProps} key={router.route} />

      </motion.main>
    </AnimatePresence>
    </Layout>

  </>
}

export default MyApp
