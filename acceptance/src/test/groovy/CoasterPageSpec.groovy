import spock.lang.Stepwise
import geb.spock.GebReportingSpec

@Stepwise
class CoasterPageSpec extends GebReportingSpec {

    def "Should open the coaster page and show coasters after loading"() {
        given: "A normal user enters the webpage"

        when: "They access the coaster page"
        def page = to CoasterPage

        then: "They should be at the Coaster page"
        waitFor {
           at CoasterPage
        }
    }
}