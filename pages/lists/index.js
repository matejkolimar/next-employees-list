import Link from 'next/link'
import styles from '../../styles/Lists.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: {
      user: data,
    },
  }
}

const Lists = ({ user }) => {
  return (
    <div>
      <h1>All lists</h1>
      {user.map((user) => (
        <Link href={'/lists/' + user.id} key={user.id}>
          <a className={styles.single}>
            <h3>{user.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Lists
