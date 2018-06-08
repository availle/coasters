import geb.Module

class CoasterModule extends Module {
    static content = {
        name                { $("td", 0) }
        waitingTime         { $("td", 1) }
        thrill              { $("td", 2) }
    }
}