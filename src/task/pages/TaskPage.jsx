import { TaskLayout } from "../layout/TaskLayout"
import { NoteView, NothingSelectedView } from "../views"
export const TaskPage = () => {
  return (
    <TaskLayout>
      {/* <NothingSelectedView /> */}
      <NoteView />
    </TaskLayout>
  )
}
