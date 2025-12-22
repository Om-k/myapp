// app/test/page.tsx

// async function getRandomUser() {
//   // ISR: Revalidate this data every 60 seconds
//   const res = await fetch('https://randomuser.me/api/', {
//     next: { revalidate: 60 }
//   });

//   if (!res.ok) throw new Error('Failed to fetch user');

//   const data = await res.json();
//   return data.results[0];
// }


async function getDelayedData() {
  const res = await fetch('https://randomuser.me/api/', {
    next: { revalidate: 60 }
  });

  // 2. Add your artificial delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!res.ok) throw new Error('Failed to fetch user');

  const data = await res.json();
  return data.results[0];
}

export default async function TestPage() {
  const user = await getDelayedData();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4 font-sans">
      <div className="relative w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl transition-all hover:shadow-none">

        {/* ISR Status Badge */}
        <span className="absolute right-4 top-4 rounded-full bg-blue-50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 ring-1 ring-inset ring-blue-700/10">
          ISR: 60s
        </span>

        {/* Profile Image */}
        <div className="relative mx-auto mb-6 h-32 w-32">
          <img
            src={user.picture.large}
            alt="Profile"
            className="h-full w-full rounded-full border-4 border-white object-cover ring-2 ring-blue-500 shadow-lg"
          />
        </div>

        {/* User Info */}
        <h1 className="text-2xl font-extrabold text-gray-900">
          {user.name.first} {user.name.last}
        </h1>
        <p className="mt-1 truncate text-sm text-gray-500">
          {user.email}
        </p>

        {/* Stats/Details Grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6 text-left">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Location</span>
            <span className="text-sm font-semibold text-gray-700">{user.location.city}, {user.location.country}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Age</span>
            <span className="text-sm font-semibold text-gray-700">{user.dob.age} years old</span>
          </div>
        </div>

        {/* Footer info */}
        <p className="mt-8 text-[11px] leading-relaxed text-gray-400 italic">
          A new random user is generated every minute. Refresh the page after 60s to see the update.
        </p>
      </div>
    </main>
  );
}