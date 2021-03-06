import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
// Import Swiper React components
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Context
import { useStore } from '../store/Store';
import { localeHandler } from '../store/remapQueries';

const Slider = () => {
  // Swiper инитиализвация компонентов
  SwiperCore.use([Pagination, Autoplay]);
  // Получаем данные с CMS
  const query = useStaticQuery(ctx);
  // Получаем глобальные переменные
  const { lang } = useStore();
  // Трансформация данных
  const data = localeHandler(query, lang);
  // console.log(data);

  const [winSize, setwinSize] = useState(0);
  useEffect(() => {
    // Колличество карточек в слайдере
    // при изменении размера окна
    window.innerWidth <= 1500 ? setwinSize(1) : setwinSize(2);
    window.addEventListener('resize', () => {
      window.innerWidth <= 1500 ? setwinSize(1) : setwinSize(2);
    });
  }, []);

  const slides = data?.allDatoCmsSlider.map(s => {
    return (
      <SwiperSlide className="worker" key={s.name}>
        {s.new && <span className="worker-new">new</span>}
        <Img fluid={s.foto.fluid} />
        <div className="worker-info">
          <h3>{s.name}</h3>
          <span>{s.skill}</span>
          <p>{s.about}</p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={winSize}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}>
        {slides}
      </Swiper>
    </>
  );
};

export default Slider;

// GrapQL запрос
const ctx = graphql`
  query {
    allDatoCmsSlider {
      nodes {
        slide {
          skill
          name
          locale
          about
          new
          foto {
            fluid(
              maxWidth: 250
              forceBlurhash: false
              imgixParams: { fm: "jpg", auto: "compress" }
            ) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`;
