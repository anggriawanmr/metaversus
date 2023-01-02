'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { StartSteps, TitleText, TypingText } from '../components';
import { fadeIn, planetVariants, staggerContainer } from '../utils/motion';
import { startingFeatures } from '../constants';

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div></motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
