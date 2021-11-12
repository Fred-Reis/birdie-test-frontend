import { useRef } from "react";
import { useSpring, animated } from "react-spring";

import {
  Container,
  CloseModalButton,
  ModalContent,
  ModalWrapper,
} from "./styles";

import { EventPropsDTO } from "../../types/eventPropsDTO";

export const Modal = (props: {
  showModal: boolean;
  setShowModal: any;
  events: EventPropsDTO[];
  event_id: string;
}) => {
  const { showModal, setShowModal, events, event_id } = props;
  const modalRef = useRef(null);

  const payload = { ...events.filter((el) => el.id === event_id) };

  var event = payload[0]?.payload;

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <Container onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContent>
                <h1>{event.event_type.replaceAll("_", " ").toUpperCase()}</h1>
                <div>
                  <label>date:</label>
                  <p>
                    {new Date(
                      event.timestamp.substring(0, 10)
                    ).toLocaleDateString("en-EN")}
                  </p>
                </div>

                {event.caregiver_id && (
                  <div>
                    <label>caregiver id:</label>
                    <p>{event.caregiver_id}</p>
                  </div>
                )}

                {event.fluid && (
                  <div>
                    <label>fluid:</label>
                    <p>{event.fluid}</p>
                  </div>
                )}

                {event.consumed_volume_ml && (
                  <div>
                    <label>consumed volume:</label>
                    <p>{event.consumed_volume_ml}ml</p>
                  </div>
                )}

                {event.observed === false && (
                  <div>
                    <label>observed:</label>
                    <p>{String(event.observed)}</p>
                  </div>
                )}

                {event.meal && (
                  <div>
                    <label>meal:</label>
                    <p>{event.meal}</p>
                  </div>
                )}

                {event.note && (
                  <div>
                    <label>notes:</label>
                    <p>{event.note}</p>
                  </div>
                )}

                {event.pad_condition && (
                  <div>
                    <label>pad condition:</label>
                    <p>{event.pad_condition}</p>
                  </div>
                )}

                {event.mood && (
                  <div>
                    <label>mood:</label>
                    <p>{event.mood}</p>
                  </div>
                )}

                {event.expected_dose_timestamp && (
                  <div>
                    <label>expected dose timestamp:</label>
                    <p>
                      {new Date(
                        event.expected_dose_timestamp.substring(0, 10)
                      ).toLocaleDateString("en-EN")}
                    </p>
                  </div>
                )}

                {event.medication_failure_reason && (
                  <div>
                    <label>medication failure reason:</label>
                    <p>{event.medication_failure_reason}</p>
                  </div>
                )}

                {event.medication_type && (
                  <div>
                    <label>medication type:</label>
                    <p>{event.medication_type}</p>
                  </div>
                )}

                {event.task_definition_description && (
                  <div>
                    <label>task description:</label>
                    <p>{event.task_definition_description}</p>
                  </div>
                )}

                {event.task_schedule_note && (
                  <div>
                    <label>task schedule note:</label>
                    <p>{event.task_schedule_note}</p>
                  </div>
                )}
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setShowModal((prev: any) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Container>
      ) : null}
    </>
  );
};
