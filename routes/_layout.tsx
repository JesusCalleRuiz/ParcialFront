import { FreshContext } from "$fresh/server.ts";
import { Component } from "preact";
import Form from "../components/Form.tsx";
import Menu from "../components/Menu.tsx"


const Layout = async (req:Request, ctx: FreshContext) => {
    const Component = ctx.Component;
    const route = ctx.route;
    return (
        <>
            <Menu/>
            <h3>My Agenda</h3>
            <Component/>
        </>
    )
}

export default Layout;