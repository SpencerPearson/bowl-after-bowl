import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

export default function AboutV4V() {
    return (
        <Container fluid>
                <Row>
                    <Col md={{span: 5, offset : 1}} className="alert alert-success">
                        <h4>What is Value 4 Value?</h4>
                        <hr />
                        <p className="text-align-left">At Bowl After Bowl we are a Value 4 Value podcast, taking our cues from the Best Podcast in the Universe, the No Agenda show with Adam Curry and John C. Dvorak. Value 4 Value digital products are produced with the following value proposition: We put our product out week after week, Bowl After Bowl, for the listening pleasure of all the Bowlers out there. We make it our goal to put real value into the product we produce. We do not accept advertising or sponsorships, we don't accept ad reads, we don't implement paywalls, and we don't charge for "bonus content". It's all yours up-front to enjoy via our RSS feed from any podcast app of your liking. In return, we ask you to think about the value you get from the show, quantify it and send it back to us. You can do this in three key ways: sending us your Time, Talent, or Treasure.
                        </p>
                    </Col>
                    <Col md={5}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Time</Accordion.Header>
                                <Accordion.Body>
                                    Everyone starts with time. It's easy, it's free and it doesn't require any particular skills or understanding. It begins with simply listening to a show, getting to know the hosts, and getting a sense of the format. Then it morphs into sharing it with others! We call it "Passing the Bowl," and you can do it in many ways. Send your friends to this website, or share a link to our show from your podcast app. Perhaps you have a show of your own you could mention the Bowl on. All these are ways of giving back your "time" to the show!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Talent</Accordion.Header>
                                <Accordion.Body>
                                    Talent can be easy to overlook when it comes to returning Value, but it's still a valid way to give back and help us produce the show! The benefit of giving your talent is it costs nothing in a monetary sense. But the tricky part to talent is it typically doesn't come out of nowhere. Those who contribute talent most often to Bowl After Bowl have prior experience in graphic design, audio production, or areas of expertise that add insight to show topics. Many producers also have already invested in audio gear, production/design software, or other tools that help them transform their ideas into finished products.
                                    {/* Add functionality to submit audio files? */}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Treasure</Accordion.Header>
                                <Accordion.Body>
                                    We save the best for last, Treasure! Treasure is the purest form of value, and often the most subjective. Some producers have a lot of treasure to spare, while others have little to none. Also, some producers value Bowl After Bowl *HIGHLY*, while others may consider it 8th or 9th on their list of a dozen Value 4 Value shows in their listening rotation. Because we produce an intangible product with a highly subjective value, we ask our listeners to determine for themselves what that value might be. Is the show as entertaining as a night out on the town? Is it more meaningful than your digital streaming subscription? There are many ways to quantify what the show means to you, but only you, the producers, can determine that true value.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
    )
}
