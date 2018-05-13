import View from './../../lib/view.js';

const About = function() {

    View.apply(this, arguments);

};

About.prototype = Object.assign({}, View.prototype, {

    tmpl : `
        <div class="inner-container">
            <h1>About!</h1>
        </div>
    `,

    render : function() {

        this.$el.innerHTML = this.tmpl;

    }

});

export default About;