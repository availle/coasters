import geb.Page

class CoasterPage extends Page {
    static url = "http://localhost:3000"
    static at = { title == "Coasters!!!" }

    static content = {
        coasters{ $(".coaster", it).module(CoasterModule) }
    }

    def getFirstCoaster() {
        return coasters(0)
    }
}