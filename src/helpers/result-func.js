export const checkResult = (choice, versusChoice) => {
  const result = choice === "scissors" && versusChoice === "paper"
    ? "YOU WIN"
    : choice === "paper" && versusChoice === "rock"
      ? "YOU WIN"
      : choice === "rock" && versusChoice === "lizard"
        ? "YOU WIN"
        : choice === "lizard" && versusChoice === "spock"
          ? "YOU WIN"
          : choice === "spock" && versusChoice === "scissors"
            ? "YOU WIN"
            : choice === "scissors" && versusChoice === "lizard"
              ? "YOU WIN"
              : choice === "spock" && versusChoice === "rock"
                ? "YOU WIN"
                : choice === "lizard" && versusChoice === "paper"
                  ? "YOU WIN"
                  : choice === "rock" && versusChoice === "scissors"
                    ? "YOU WIN"
                    : choice === "paper" && versusChoice === "spock"
                      ? "YOU WIN"
                      : choice === "paper" && versusChoice === "scissors"
                        ? "YOU LOSE"
                        : choice === "rock" && versusChoice === "paper"
                          ? "YOU LOSE"
                          : choice === "lizard" && versusChoice === "rock"
                            ? "YOU LOSE"
                            : choice === "spock" && versusChoice === "lizard"
                              ? "YOU LOSE"
                              : choice === "scissors" && versusChoice === "spock"
                                ? "YOU LOSE"
                                : choice === "lizard" && versusChoice === "scissors"
                                  ? "YOU LOSE"
                                  : choice === "rock" && versusChoice === "spock"
                                    ? "YOU LOSE"
                                    : choice === "scissors" && versusChoice === "rock"
                                      ? "YOU LOSE"
                                      : choice === "paper" && versusChoice === "lizard"
                                        ? "YOU LOSE"
                                        : choice === "spock" && versusChoice === "paper"
                                          ? "YOU LOSE"
                                          : "DRAW"
  return result;
}