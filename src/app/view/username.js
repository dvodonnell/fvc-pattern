import View from './../../lib/view.js';

import FormUsername from '../component/form/username.js';

const Username = function() {

    View.apply(this, arguments);

};

Username.prototype = Object.assign({}, View.prototype, {

    tmpl : `
        <div class="inner-container">
            <h1>Choose a username</h1>
            <div class="form-container"></div>
        </div>
    `,

    render : function() {

        this.$el.innerHTML = this.tmpl;

        const form = new FormUsername(this.$el.querySelector('.form-container'));
        form.render();

        form.addListener('submitted', () => {
            this.emit('next');
        });

    }

});

export default Username;