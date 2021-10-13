'use strict';

const e = React.createElement;

class App extends React.Component {
  
  render() {
    return (e(React.Fragment, null,
      e(Resources, null),
      e(Testimonials, null)));
  }
}

class Resources extends React.Component {
  
  render() {
    return e('section', {id: "resources"}, 
    [e('div', {id: "resources-img"}, e('img', {src: 'images/resources-img.png', alt: ''}, null)),
    e('div', {id: "resources-info"}, 
    [e('h2', null, 'Resources'), 
    e('p', null, `Our services only provide the best 
    tutors that will guide you to fulfill all your programming 
    inquires. Get started with coding, the right way with our mentors.`), e('button', null, 'Read More')])], 
    e('footer', null, 'Trusted By Students, Verified By Mentors'),
    e('hr', null, null));
  }
}

class Testimonials extends React.Component {

  render() {
    return e('section', {id: "testimonials"},
    [e('h2', null, 'Testimonials'), 
    e('p', {id: "testimonial-info"}, `Our services only provide the 
    best tutors that will guide you to fulfill 
    all your programming inquires. Get started 
    with coding, the right way with our mentors.`), 
    e('div', {id: 'reviews-container'}, [
      e(Review, {name: 'Peter Schon', role: 'TCF Student'}), 
      e(Review, {name: 'Jane Austin', role: 'TCF Student'}), 
      e(Review, {name: 'Justin Bob', role: 'TCF Student'})])])
  }
}

class Review extends React.Component {

  render() {
    return (
      e('div', {id: 'review-info'}, [
        e('img', {src: 'images/testimonials-img.png', alt: `A picture of ${this.props.name}`, class: 'review-pic'}, null), 
        e('div', {class: 'reviews'}, [
          e('p', null, [this.props.name, e('br', null), this.props.role]),  
          e('img', {src: 'images/testimonials-star.png', alt: `Rating for The Coding Foundation given by ${this.props.name}`}, null), 
          e('p', null, `The Coding Foundation Helped me to achieve my long lasting goals in just 2 hours 
        of class daily for 3 weeks for free!`)])])
    );
  }
}

const domContainer = document.querySelector('#container');
ReactDOM.render(e(App), domContainer);