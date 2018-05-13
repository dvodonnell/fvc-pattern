import View from './../../lib/view.js';

import FormPassword from '../component/form/password.js';

const Password = function() {

    View.apply(this, arguments);

};

Password.prototype = Object.assign({}, View.prototype, {

    tmpl : `
        <div class="inner-container">
            <h1>Choose a password</h1>
            <div class="form-container"></div>            
        </div>
    `,

    render : function() {

        this.$el.innerHTML = this.tmpl;

        const form = new FormPassword(this.$el.querySelector('.form-container'));
        form.render();

        form.addListener('submitted', () => {
            this.emit('done');
        });

    }

});

export default Password;