import { useNavigate } from "react-router";
import { getPathByGuid } from "@/router/routes";
import { withStopPropagation } from "@/utils/utils";
import "@/styles/Frame21.css";
const Frame21 = () => {
    const navigate = useNavigate();

    const click_2_4 = () => {
        navigate(getPathByGuid("2:3"), {
            state: {
                from: "2:4",
                et: "c"
            }
        });
    };

    return (
        <div className="scroll-container">
            <div id="2_1" className="Pixso-frame-2_1">
                <div
                    id="2_4"
                    className="Pixso-rectangle-2_4"
                    onClick={withStopPropagation(click_2_4)}
                ></div>
            </div>
        </div>
    );
};
export default Frame21;
