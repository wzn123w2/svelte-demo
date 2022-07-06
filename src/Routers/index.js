import Home from "../Home/index.svelte";
import Components from "../Introduction/Components/index.svelte";
import Reactivity from "../Reactivity/index.svelte";
import PropsPage from "../Props/index.svelte";
import Logic from "../Logic/index.svelte";
import EachAndIf from "../Logic/EachAndIf.svelte";
import Event from "../Events/index.svelte";
import Bindings from "../Bindings/index.svelte";
import LifeCycle from "../LifeCycle/index.svelte";
import Stores from "../Stores/index.svelte";
import Transitions from "../Transitions/index.svelte";

export const routes = {
    "/": Home,
    "/components": Components,
    "/reactivity": Reactivity,
    "/props": PropsPage,
    "/logic": Logic,
    "/logic/*": EachAndIf,
    "/event": Event,
    "/bindings": Bindings, 
    "/lifeCycle": LifeCycle,
    "/stores": Stores,
    "/transitions": Transitions,
}
