import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, updateTitle } from "../../store/AppActions";
import { AppState } from "../../store/AppStore";
import "./Settings.scss";

function Settings() {
  const { title, totalCount, allowedCapacity } = useSelector(
    (state: AppState) => ({
      title: state.title,
      totalCount: state.totalCount,
      allowedCapacity: state.allowedCapacity,
    })
  );
  const dispatch = useDispatch();

  const [_title, setTitle] = useState(title);
  const [_totalCount, setTotalCount] = useState(totalCount);
  const [_allowedCapacity, setAllowedCapacity] = useState(allowedCapacity);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(_title, _totalCount, _allowedCapacity);
    dispatch(updateTitle(_title));
  };

  return (
    <section className="home pt-2 mx-4">
      <form onSubmit={onSubmit} className="is-flex is-flex-direction-column">
        <fieldset>
          <label htmlFor="name" className="is-size-4">
            Name:
          </label>
          <input
            className="input is-success"
            type="text"
            name="name"
            id="name"
            defaultValue={_title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="totalCapacity" className="is-size-4">
            Total Capacity:
          </label>
          <input
            className="input is-success"
            type="number"
            name="totalCapacity"
            id="totalCapacity"
            defaultValue={_totalCount}
            onChange={(e) => setTotalCount(+e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="allowedCapacity" className="is-size-4">
            Allowed Capacity:
          </label>
          <input
            className="slider is-fullwidth"
            step="1"
            min="0"
            max="100"
            type="range"
            defaultValue={_allowedCapacity * 100}
            onChange={(e) => setAllowedCapacity(+e.target.value / 100)}
          />
        </fieldset>
        <fieldset className="is-flex is-justify-content-flex-end is-fixed">
          <button className="button is-success mt-5" type="submit">
            Save
          </button>
        </fieldset>
      </form>
    </section>
  );
}

export default Settings;
