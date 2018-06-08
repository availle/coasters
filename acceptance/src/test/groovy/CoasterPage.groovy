import geb.Page

class CoasterPage extends Page {
    static url = "http://localhost:3000"
    static at = { title == "Coasters!!!" }

    static content = {
        coasters { $(".coaster").moduleList(CoasterModule) }
    }

    def getFirstCoaster() {
        return coasters[0]
    }

    def getLastCoaster() {
        return coasters[coasters.size() - 1]
    }
}