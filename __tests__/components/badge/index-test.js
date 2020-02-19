import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { BadgeClass } from "../../../app/components/badge/";

describe('Badge suite', () => {
    it("Render badge with active=true", () => {
        const props = {
            active: true,
            textContent: 'Sample Text',
            size: 10,
            fontSize: 10,
        }
        const root = renderer.create(<BadgeClass {...props} />).toJSON();
        expect(root).toMatchSnapshot();
    });
    it("Render badge with active=false", () => {
        const props = {
            active: false,
            textContent: 'Sample Text',
            size: 10,
            fontSize: 10,
        }
        const root = renderer.create(<BadgeClass {...props} />).toJSON();
        expect(root).toMatchSnapshot();
    });
});

/** before each, after each, before all, after all */
