import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout.jsx";
import useUserAuth from "../../hooks/useUserAuth.jsx";
import { useNavigate } from "react-router-dom";
import HeaderWithFilter from "../../components/layout/HeaderWithFilter.jsx";
import axiosinstance from "../../utils/axiosinstance.js";
import { API_PATHS } from "../../utils/apiPath.js";
import PollCard from "../../components/PollCards/PollCard.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import CREATE_ICON from "../../assets/images/my-poll-icon.png";
import EmptyCard from "../../components/cards/EmptyCard.jsx";

const PAGE_SIZE = 10;


const MyPolls = () => {
    const { user, isAuthenticated, isLoading } = useUserAuth();
    const navigate = useNavigate();

    const [allPolls, setAllPolls] = useState([]);
    const [stats, setStats] = useState({});
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [filterType, setFilterType] = useState("");
    const [error, setError] = useState(null);

    const fetchAllPolls = async (overridePage = page, reset = false) => {
        if (loading || !isAuthenticated || !user?._id) return;

        setLoading(true);
        setError(null);

        try {
            const queryParams = new URLSearchParams({
                page: overridePage,
                limit: PAGE_SIZE,
                creator: user._id, // Changed to match backend parameter
                ...(filterType && { type: filterType }),
            });

            console.log("Fetching polls with query:", queryParams.toString());

            const response = await axiosinstance.get(
                `${API_PATHS.POLLS.GET_ALL}?${queryParams.toString()}`
            );

            console.log("API Response:", response.data);

            const newPolls = response.data?.polls || response.data || [];
            setAllPolls((prevPolls) =>
                reset ? newPolls : [...prevPolls, ...newPolls]
            );
            setHasMore(newPolls.length === PAGE_SIZE);
        } catch (error) {
            setError("Failed to fetch polls. Please try again later.");
            console.error("API Error:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };

    const loadMorePolls = () => {
        if (!loading && hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    // Initial load
    useEffect(() => {
        if (isAuthenticated) {
            setPage(1);
            fetchAllPolls(1, true);
        }
    }, [isAuthenticated, filterType]);

    if (isLoading) {
        return <div>Loading user data...</div>;
    }

    return (
        <DashboardLayout activeMenu="My Polls">
            <div className="my-5 mx-auto">
                <HeaderWithFilter
                    title="My Polls"
                    filterType={filterType}
                    setFilterType={setFilterType}
                />

                {error && (
                    <div className="text-red-500 mb-4 text-center">{error}</div>
                )}

                {!loading && allPolls.length === 0 && !error && (
                    <EmptyCard
                        imgSrc={CREATE_ICON}
                        message="You have not created any polls yet."
                        btnText="Create Poll"
                        onClick={() => navigate("/create-poll")}
                    />
                )}

                <InfiniteScroll
                    dataLength={allPolls.length}
                    next={loadMorePolls}
                    hasMore={hasMore}
                    loader={<h4 className="info-text">Loading more polls...</h4>}
                    endMessage={
                        <p className="info-text">
                            {allPolls.length === 0
                                ? "No polls found."
                                : "You've seen all your polls!"}
                        </p>
                    }
                >
                    {allPolls.map((poll) => (
                        <PollCard
                            key={`my-poll-${poll._id}`}
                            pollId={poll._id}
                            question={poll.question}
                            type={poll.type}
                            options={poll.options}
                            voters={poll.voters?.length || 0}
                            responses={poll.responses || []}
                            creatorProfileImg={user?.profileImageUrl}
                            creatorName={user?.fullName}
                            creatorUsername={user?.username}
                            userHasVoted={poll.userHasVoted || false}
                            isPollClosed={poll.pollClosed || false}
                            createdAt={poll.createdAt}
                            isMyPoll
                        />
                    ))}
                </InfiniteScroll>
            </div>
        </DashboardLayout>
    );
};

export default MyPolls;