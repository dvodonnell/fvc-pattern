import Component from './../../lib/component.js';

const Input = function() {

    Component.apply(this, arguments);

};

Input.prototype = Object.assign({}, Component.prototype, {

    tmpl : `
        <input type="text"/>
    `,

    render : function() {

        this.$el.innerHTML = this.tmpl;

    }

});

export default Input;