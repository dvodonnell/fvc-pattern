import Component from './../../lib/component.js';

const Form = function() {

    Component.apply(this, arguments);

};

Form.prototype = Object.assign({}, Component.prototype, {

    render : function() {

        this.$el.innerHTML = `
            <form></form>
        `;

        this.$el.firstChild.addEventListener('submit', (e) => {
            e.preventDefault();
            this.emit('submitted');
        });

    }

    //add common form stuff...

});

export default Form;