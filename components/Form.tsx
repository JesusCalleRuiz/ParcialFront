import {FunctionComponent} from "preact";

const Form: FunctionComponent = ()  => {
    return (
        <form class="Form" action="/agendacsr" method="post">
            <h2>Add new contact</h2>
            <input type="name" name="name" placeholder="Name"/>
            <input type="email" name="email" placeholder="Email"/>
            <button type="publish">Add contact</button>
        </form>
    );
};

export default Form;