import React, { useEffect } from 'react';
import styles from './ExperienceList.module.css';
import { experienceData } from '../../data/experienceData';

const { title, coreTechSkills, softSkills, paragraphs } = experienceData;
const { overview, military, contractor } = paragraphs;

const ExperienceList = () => {
  useEffect(() => {
    const container = document.querySelector('#container');
    const target = container.querySelectorAll('p');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.experience_list_item__isVisible);
        } else {
          entry.target.classList.remove(styles.experience_list_item__isVisible);
        }
      });
    });

    target.forEach((item) => observer.observe(item));
  }, []);
  return (
    <div id='container' className={styles.experience_list_container}>
      <p className={styles.experience_list_title}>{title}</p>
      <p className={[styles.experience_list_item]}>{coreTechSkills}</p>
      <p className={[styles.experience_list_item]}>{softSkills}</p>
      <p className={[styles.experience_list_item]}>{overview}</p>
      <p className={[styles.experience_list_item]}>{military}</p>
      <p className={[styles.experience_list_item]}>{contractor}</p>
    </div>
  );
};

export default ExperienceList;
