package com.interactive.networking.platform.common.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.List;

@Schema(description = "Standardized pagination response envelope")
public record PageResponse<T>(
        @Schema(description = "List of items for current page")
        List<T> content,

        @Schema(description = "Current page number (0-indexed)", example = "0")
        int page,

        @Schema(description = "Number of items per page", example = "20")
        int size,

        @Schema(description = "Total number of elements across all pages", example = "100")
        long totalElements,

        @Schema(description = "Total number of pages", example = "5")
        int totalPages,

        @Schema(description = "Whether this is the first page", example = "true")
        boolean first,

        @Schema(description = "Whether this is the last page", example = "false")
        boolean last
) {
    public static <T> PageResponse<T> of(List<T> content, int page, int size, long totalElements, int totalPages, boolean first, boolean last) {
        return new PageResponse<>(content, page, size, totalElements, totalPages, first, last);
    }
}
