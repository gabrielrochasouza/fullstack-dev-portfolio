import ProjectCard from "../project-card";
import { SectionContainer } from "./style";
import mainProjects from "./projects";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import "aos/dist/aos.css"; // You can also use <link> for styles
import 'swiper/css';
import 'swiper/css/pagination';

const ProjectSection = () => {
  return (
    <SectionContainer id="project">
      <div className="box">
        <span data-aos="fade-in" data-aos-delay="400" data-aos-once={false} data-aos-duration="1000">
          Veja alguns de meus projetos
        </span>
        <h3 data-aos="fade-in" data-aos-delay="700" data-aos-once={false} data-aos-duration="1000">
          Projetos realizados
        </h3>
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {mainProjects.map((project, i) => (
          <SwiperSlide key={`SwiperSlide-n°:${i}`}>
            <ProjectCard
              key={`Projeto-n°:${i}`}
              {...project}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionContainer>
  );
};
export default ProjectSection;
