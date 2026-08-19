package com.interactive.networking.platform.common.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
import java.time.Instant;

@Schema(description = "Standard API response wrapper for all successful and generic responses")
@JsonInclude(JsonInclude.Include.NON_NULL)
public record ApiResponse<T>(
        @Schema(description = "Indicates whether the request was successful", example = "true")
        boolean success,

        @Schema(description = "Response payload")
        T data,

        @Schema(description = "Human-readable message", example = "Operation completed successfully")
        String message,

        @Schema(description = "Timestamp when the response was generated")
        Instant timestamp
) {

    public static <T> ApiResponse<T> ok(T data, String message) {
        return new ApiResponse<>(true, data, message, Instant.now());
    }

    public static <T> ApiResponse<T> ok(T data) {
        return new ApiResponse<>(true, data, "Success", Instant.now());
    }

    public static <T> ApiResponse<T> created(T data, String message) {
        return new ApiResponse<>(true, data, message, Instant.now());
    }

    public static <T> ApiResponse<T> error(String message) {
        return new ApiResponse<>(false, null, message, Instant.now());
    }
}
