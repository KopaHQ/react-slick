import { mount } from "enzyme";
import assign from "object-assign";
import { getRequiredLazySlides } from "../src/utils/innerSliderUtils";
import {
  createInnerSliderWrapper,
  clickNext,
  clickPrev,
  tryAllConfigs,
  actualTrackPositionProperties,
  testTrackPositionProperties
} from "./testUtils";
import { getTrackPositionProperties } from "../src/utils/innerSliderUtils";

const testSettings = settings => {
  let slider = createInnerSliderWrapper(settings);
  for (let click = 0; click < settings.noOfSlides + 2; click++) {
    testTrackPositionProperties(slider);
    clickNext(slider);
  }
  slider = createInnerSliderWrapper(settings);
  for (let click = 0; click < settings.noOfSlides + 2; click++) {
    testTrackPositionProperties(slider);
    clickPrev(slider);
  }
};

describe("Slider Styles Tests", () => {
  let settings = {
    useCSS: false,
    speed: 0,
    centerMode: [true, false],
    noOfSlides: [7, 8],
    initialSlide: [0, 5],
    slidesToShow: [1, 3, 4]
  };
  let settingsList = [];
  tryAllConfigs(settings, settingsList);
  // shuffle the list
  settingsList.sort(() => 0.5 - Math.random());
  settingsList.forEach((settings, index) => {
    if (Math.random() < 0.5) {
      test(`Testing config no. ${index}`, () => testSettings(settings));
    }
  });
});
