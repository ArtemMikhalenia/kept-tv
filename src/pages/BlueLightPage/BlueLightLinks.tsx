import { type JSX, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';

import { motion } from 'motion/react';

import type { BlueLightInterface } from '../../interfaces/blueLightInterface';

import type { BlueLightDataTypes } from '../../types/blueLightTypes';
import './blueLightPageStyles.scss';

const BlueLightLinks = (): JSX.Element => {
  const links = useLoaderData() as BlueLightDataTypes;
  const [link, setLink] = useState<BlueLightInterface[]>(links);

  useEffect(() => {
    setLink(links);
  }, [links]);

  return (
    <motion.div className="blue-light-links">
      {link.map((item, i) => (
        <motion.div
          key={i}
          initial={{ x: `${item.x}`, y: `${item.y}`, scale: 0, opacity: 0 }}
          animate={{
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: { duration: 1, delay: 1 },
          }}
          className={`blue-light-link ${item.className}`}
        >
          <Link to={item.url} title={item.titleText}>
            <motion.img
              src={item.imgSrc}
              alt={`${item.imgAlt}-img`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlueLightLinks;
