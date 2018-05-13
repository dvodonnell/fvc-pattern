import Component from './../../lib/component.js';

const Button = function() {

    Component.apply(this, arguments);

};

Button.prototype = Object.assign({}, Component.prototype, {

    render : function() {

        this.$el.innerHTML = `
            <button type="submit">${this.config.label}</button>
        `;

        this.$el.firstChild.addEventListener('click', (e) => {
            e.preventDefault();
            this.emit('clicked');
        });

    }

});

export default Button;