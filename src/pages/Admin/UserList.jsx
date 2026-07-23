import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

import Loading from "../../components/common/Loading";
import ErrorMessage from "../../components/common/ErrorMessage";
import PageHeader from "../../components/admin/PageHeader";

import {
  getUsers,
  deleteUser,
} from "../../features/users/userThunks";

const UserList = () => {
  const dispatch = useDispatch();

  const { users, loading, error } = useSelector(
    (state) => state.users,
  );  

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmed) return;

    try {
      await dispatch(deleteUser(id)).unwrap();

      toast.success("User deleted successfully");
    } catch (error) {
      toast.error(error?.message || error || "Failed to delete user");
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <>
      <PageHeader title="Users" subtitle="Manage application users." />

      <div className="mt-6 rounded-lg bg-white shadow">
        <div className="overflow-x-auto">
          <table className="min-w-min w-full border-collapse">
            <thead className="bg-stone-300 border-b border-stone-300">
              <tr>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Role</th>
                <th className="px-4 py-3 text-left">Email</th>
                <th className="px-4 py-3 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={4} className="py-8 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user._id} className="border-t border-stone-400">
                    <td className="px-4 py-3 font-medium">{user.name}</td>

                    <td className="px-4 py-3">{user.role}</td>

                    <td className="px-4 py-3">{user.email}</td>

                    <td className="px-4 py-3">
                      <div className="flex justify-center gap-2">
                        {/* <Link
                          to={`/admin/users/${product._id}/edit`}
                          className="rounded bg-yellow-500 p-2 text-white hover:bg-yellow-600"
                        >
                          <FaEdit />
                        </Link> */}

                        <button
                          onClick={() => handleDelete(user._id)}
                          className="rounded bg-red-200 p-2 text-red-700"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
