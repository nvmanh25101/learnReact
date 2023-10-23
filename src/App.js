import { useReducer, useRef } from 'react'

const initState = {
  job: '',
  jobs: []
}

const SET_JOB = 'set_job'
const CREATE_JOB = 'create_job'
const DELETE_JOB = 'delete_job'

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const createJob = payload => {
  return {
    type: CREATE_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}


const reducer = (state, action) => {
  switch(action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload
      }
    case CREATE_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
    case DELETE_JOB:
      const newJobs = [...state.jobs]

      newJobs.splice(action.payload, 1)

      return {
        ...state,
        jobs: newJobs
      }
    default:
      throw new Error('Invalid action')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const {job, jobs} = state

  const inputRef = useRef()

  const handleSubmit = () => {
    dispatch(createJob(job))
    dispatch(setJob(''))

    inputRef.current.focus()
  }

  return (
    <div style={{padding: 20}}>
      <input
        ref={inputRef}
        value={job}
        onChange={e => {
			dispatch(setJob(e.target.value))
		}}
      />

      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
           <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
           </li>
        ))}
      </ul>
    </div>
  );
}

export default App;