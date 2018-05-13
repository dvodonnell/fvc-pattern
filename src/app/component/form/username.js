import Form from './../form.js';

import ComponentInput from './../input.js';
import ComponentButton from './../button.js';

const UsernameForm = function() {

    Form.apply(this, arguments);

};

UsernameForm.prototype = Object.assign({}, Form.prototype, {

    render : function() {

        this.$el.innerHTML = `
            <form>
                <div class="input-container"></div>
                <div class="submit-container"></div>
            </form>
        `;

        const input = new ComponentInput(this.$el.querySelector('.input-container'));
        input.render();

        const submit = new ComponentButton(this.$el.querySelector('.submit-container'), {
            label : 'Continue'
        });

        submit.render();

        this.$el.firstElementChild.addEventListener('submit', (e) => {
            e.preventDefault();
            this.emit('submitted');
        });

    }

});

export default UsernameForm;