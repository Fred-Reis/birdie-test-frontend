export interface EventPropsDTO {
  id: string;
  payload: any;
  alert_id: string | null;
  task_instance_id: string | null;
  visit_id: string | null;
  caregiver_id: string | null;
  payload_as_text: string | null;
  rejected_event_id: string | null;
  observation_event_id: string | null;
  timestamp: string;
  event_type: string;
  care_recipient_id: string;
}
