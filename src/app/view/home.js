import View from './../../lib/view.js';

const Home = function() {

    View.apply(this, arguments);

};

Home.prototype = Object.assign({}, View.prototype, {

    tmpl : `
        <div class="inner-container">
            <h1>Home!</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac felis justo. Fusce vel scelerisque nisl. Nullam sed imperdiet eros. Sed dignissim ipsum sem, eget sodales ipsum laoreet ut. Cras nec ex magna. Quisque at commodo erat. Pellentesque malesuada lobortis risus, eu vehicula arcu ornare in. Fusce nec tellus vehicula, ultricies metus a, dignissim quam.
            </p>
            <p>
            Sed pellentesque velit non tortor vehicula rhoncus. Morbi luctus libero eget tellus facilisis aliquam. Ut ultricies accumsan lectus, et accumsan risus fermentum vel. In sed ex cursus ipsum convallis pharetra ut sed nibh. Maecenas ornare turpis quis orci pharetra, quis consectetur libero ullamcorper. Nam tincidunt egestas sem, finibus posuere urna volutpat a. Praesent dolor sapien, volutpat quis nisl ut, fermentum euismod eros. Mauris vitae libero eu lectus imperdiet interdum. Morbi facilisis dui eu elit faucibus, a pulvinar libero mollis. Praesent a nisi arcu. Curabitur porta est vitae dui tempus imperdiet. Etiam auctor erat vel mollis commodo. Praesent eget ligula nec metus lobortis fringilla. Curabitur non ullamcorper leo, eu volutpat lectus.
            </p>
        </div>
    `,

    render : function() {

        this.$el.innerHTML = this.tmpl;

    }

});

export default Home;