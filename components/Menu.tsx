import { FunctionComponent } from "preact";

const Menu: FunctionComponent = () => {
    return(
        <div class = "menu">
        <a href="/agendacsr">Agenda Client Side</a>
        <a href="/agendassr">Agenda Server Side</a>
    </div>
    );
};

export default Menu;