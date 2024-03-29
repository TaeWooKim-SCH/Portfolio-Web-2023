import React from 'react';
import './About.css';
import {AiFillHtml5, AiOutlineBarChart} from 'react-icons/ai';
import Tag from '../Components/Tag';
import profile from '../assets/profile.png';
import backgroundImg from '../assets/about-back.jpg';

export default function About() {
  return(
    <section id="about">
      <img className='about-background-img' src={backgroundImg} alt="배경사진" />
      <section className="about-top">
        <div className="about-title" data-aos = "fade-down" data-aos-duration = "800">
          MY GOAL IS TO BECOME A DEVELOPER WHO CAN DO<p className="title-bottom">EVERYTHING.</p>
        </div>
        <img className="profile" src={profile} alt="프로필 사진"></img>
      </section>
      <section className="about-bottom">
        <section className='about-left'>
          <div className='about-skill'>
            <AiFillHtml5 className="about-skills" size="50"/>
            <div>FRONT END</div>
          </div>
          <div className='about-skill'>
            <AiOutlineBarChart className="about-skills" size="50" />
            <div>DATA SCIENCE</div>
          </div>
        </section>
        <section className="about-right" data-aos = "fade-up" data-aos-duration = "800">
          <div className='about-comment-box'>
            <p className="about-comment">안녕하세요. 개발자를 꿈꾸는 김태우입니다.</p>
            <p className="about-comment">프로그래밍하는 것 자체를 즐거워합니다.</p>
            <p className="about-comment">문제가 발생하면 코드만 갖다 붙이는 것이 아닌 분석하는 것을 지향합니다.</p>
            <p className="about-comment">협업하는 사람들과 의사소통하는 것을 매우 선호합니다.</p>
            <p className="about-comment">항상 배움의 자세를 갖고 최고의 개발자가 되겠습니다.</p>
            <div className="tag-box">
              <Tag word="계획적인" />
              <Tag word="끝까지" />
              <Tag word="책임감" />
              <Tag word="세밀한" />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}