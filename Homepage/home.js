'use strict';

const e = React.createElement;

class App extends React.Component {
  
  render() {
    return (e(React.Fragment, null,
      e(Resources, null),
      e(Testimonials, null), 
      e(Internship, null), 
      e(Discord, null), 
      e(Contact, null)));
  }
}

class Resources extends React.Component {
  
  render() {
    return (
      e('section', {id: "resources"}, [
      e('div', {id: 'resources-content'}, [
        e('div', {id: "resources-img"}, e('img', {src: 'images/resources-img.png', alt: ''}, null)),
        e('div', {id: "resources-info"}, [
          e('h2', null, 'Resources'), 
        e('p', null, `Our services only provide the best 
        tutors that will guide you to fulfill all your programming 
        inquires. Get started with coding, the right way with our mentors.`), 
        e('a', {href: '#', target: '_blank'}, e('button', null, 'Read More'))])
      ]), e(Footer, null)])
    );    
  }
}

class Testimonials extends React.Component {

  render() {
    return (
      e('section', {id: "testimonials"},
    [e('div', {id: "testimonials-content"}, [e('h2', null, 'Testimonials'), 
    e('p', {id: "testimonial-info"}, `Our services only provide the 
    best tutors that will guide you to fulfill 
    all your programming inquires. Get started 
    with coding, the right way with our mentors.`), 
    e('div', {id: 'reviews-container'}, [
      e(Review, {name: 'Peter Schon', role: 'TCF Student'}), 
      e(Review, {name: 'Jane Austin', role: 'TCF Student'}), 
      e(Review, {name: 'Justin Bob', role: 'TCF Student'})])]), 
      e(Footer, null)])
    );
  }
}

class Review extends React.Component {

  render() {
    return (
      e('div', {id: 'review-info'}, [
        e('img', {src: 'images/testimonials-img.png', alt: `A picture of ${this.props.name}`, class: 'review-pic'}, null), 
        e('div', {class: 'reviews'}, [
          e('p', {class: 'review-person'}, [this.props.name, e('br', null), this.props.role]),  
          e('span', null, [
            e('img', {src: 'images/testimonials-star.png', alt: ''}, null), 
            e('img', {src: 'images/testimonials-star.png', alt: ''}, null), 
            e('img', {src: 'images/testimonials-star.png', alt: ''}, null), 
            e('img', {src: 'images/testimonials-star.png', alt: ''}, null), 
            e('img', {src: 'images/testimonials-star.png', alt: ''}, null)]), 
          e('p', null, `"The Coding Foundation Helped me to achieve my long lasting goals in just 2 hours 
        of class daily for 3 weeks for free!"`)])])
    );
  }
}

class Footer extends React.Component {

  render() {
    return (e(React.Fragment, null, 
      e('footer', null, 'Trusted By Students, Verified By Mentors', e('hr', null, null)))
    );
  }
}

class Internship extends React.Component {

  render() {
    return (
      e('section', {id: 'internship'}, [
        e('div', {id: 'internship-content'}, [
          e('img', {src: 'images/internship-img1.png', alt: ''}, null),
          e('div', null, [e('h2', null, 'Join Us'), 
          e('p', null, `The Coding Foundation offers 
          internship positions for any department. If 
          you want to learn more, click the button below!`), 
          e('a', {href: '#', target: '_blank'}, e('button', null, 'Join Now!'))]), 
          e('img', {src: 'images/internship-img2.png', alt: ''}, null)]),
        e(Footer, null)])
    );
  }
}

class Discord extends React.Component {

  render() {
    return (
      e('section', {id: 'discord'}, [
        e('h2', null, 'Join Our Discord Server to Explore your passion for Coding!'),
        e('div', {id: 'discord-content'}, [ 
          e('span', null, [
            e('p', null, 'Discord'), 
            e('img', {src: 'images/discord-phone.png', alt: ''}, null)]), 
          e('div', {id: 'discord-info'}, [
            e('img', {src: 'images/discord-icon.png', alt: ''}, null), 
            e('p', null, `Join to get in touch with students across the world. 
            Develop your network to develop your passion. Anyone Could join Discord!`), 
            e('a', {href: 'https://discord.gg/SZ6wtDEwtj', target: '_blank'}, e('button', null, 'Join Now'))])]), 
        e(Footer, null)])
    );
  }
}

class Contact extends React.Component {

  render() {
    return (
      e('section', {id: 'contact'}, [
        e('h2', null, `Any additional questions? Interested in starting a chapter? Fill out this form: `), 
        e('div', {id: 'contact-content'}, [
          e('form', null, [
            e('label', {for: 'name'}, e('input', {type: 'text', id:'name', placeholder: 'Name'}, null)), 
            e('label', {for: 'email'}, e('input', {type: 'text', id:'email', placeholder: 'Email'}, null)), 
            e('label', {for: 'subject'}, e('input', {type: 'text', id:'subject', placeholder: 'Subject'}, null)), 
            e('label', {for: 'message'}, e('textarea', {id:'message', placeholder: 'Message'}, null)),
            e('button', {type: 'submit'}, 'Send')]), 
          e('img', {src: 'images/contact-img.png', alt: ''}, null)])])
    );
  }
}

const domContainer = document.querySelector('#container');
ReactDOM.render(e(App), domContainer);