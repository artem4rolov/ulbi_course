import {
  getAddFormError,
  getAddFormText,
} from '../../model/selectors/add-comment-form.selector'
import { useSelector } from 'react-redux'
import {
  Button,
  classNames,
  DynamicModuleLoader,
  Input,
  ReducersList,
  useAppDispatch,
} from 'shared'
import { ButtonTheme } from 'shared/ui/button/button.types'
import classes from './add-comment-form.module.scss'
import { useCallback } from 'react'
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/add-comment-form.slice'

export interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
} as ReducersList

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
  const text = useSelector(getAddFormText)
  const errors = useSelector(getAddFormError)

  const dispatch = useAppDispatch()

  const onCommentFormChange = useCallback(
    (text: string) => {
      dispatch(addCommentFormActions.setText(text))
    },
    [dispatch],
  )
  const onSendHandler = useCallback(
    (text: string) => {
      if (text) {
        onSendComment(text)
        dispatch(addCommentFormActions.setText(''))
      }
    },
    [dispatch],
  )

  return (
    <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
      <div className={classNames(classes['add-comment-form'], {}, [className])}>
        {errors && <>{errors}</>}
        <Input
          placeholder="Введите текст комментария"
          value={text}
          onChange={onCommentFormChange}
          className={classes['add-comment-form-input']}
        />
        <Button
          theme={ButtonTheme.OUTLINE_INVERTED}
          onClick={() => onSendHandler(text)}
        >
          Отправить
        </Button>
      </div>
    </DynamicModuleLoader>
  )
}

export default AddCommentForm
