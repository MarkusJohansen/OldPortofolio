import '../css/SecondPage.css';
import TitledBox from "./TitledTextBox";

export default secondPage;

function secondPage(){
    return (
        <div id="page2" class="pages">
            <div class="left-column">
                <TitledBox title="About me" text="I have always had a facination for new technology, especially regarding computer technology, which is the reason for me studying informatics. What i enjoy about this field of technology, is the ability to both be creatively expressive while sticking to the logic behind the software. I enjoy fullstack developement! While i enjoy development i also think that webtechnologies are very interesting in particular. In my sparetime i enjoy fly-fishing, playing guitar, hanging out with friends or noodling with some dev-projects of my own."/>
            </div>
            <div class="right-column">
                <p>ntnu logo goes here</p>
            </div>
        </div>
    )
}