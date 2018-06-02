import spock.lang.Stepwise
import geb.spock.GebReportingSpec

@Stepwise
class CoasterPageSpec extends GebReportingSpec {

    def "Should open the coaster page and show coasters after loading"() {
        when: "The user accesses the coaster page"
        def page = to CoasterPage

        then: "The first coaster should be called Superfast HyperCoaster"
        waitFor {
            page.firstCoaster.name.text() == 'Superfast HyperCoaster'
        }
    }
}