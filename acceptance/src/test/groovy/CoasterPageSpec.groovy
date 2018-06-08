import spock.lang.Stepwise
import geb.spock.GebReportingSpec

@Stepwise
class CoasterPageSpec extends GebReportingSpec {
    def page

    def "Should open the coaster page and show coasters after loading"() {
        given: "A normal user enters the webpage"

        when: "They access the coaster page"
        page = to CoasterPage

        then: "They should be at the Coaster page"
        waitFor {
           at CoasterPage
        }
    }

    def "Should display the thrill rating next to the coaster name" () {
        given: "A normal user is at the webpage"

        when: "They do nothing"
        page = at CoasterPage

        then: "The thrill rating of the coaster should be displayed"
        page.firstCoaster.thrill.text() != ""
    }

    def "Should only display interesting coasters"() {
        given: "A normal user is at the webpage"

        when: "They do nothing"
        page = at CoasterPage

        then: "none of the remaining coasters should have a thrill rating of 0"
        page.coasters.findAll{
            it.thrill.text() == '0'
        }.size() == 0
    }

    def "Should sort coasters by thrill rating"() {
        given: "A normal user is at the webpage"

        when: "They do nothing"
        page = at CoasterPage

        then: "They should see the coaster with the lowest rating at the bottom"
        page.lastCoaster.thrill.text() == 3
    }
}